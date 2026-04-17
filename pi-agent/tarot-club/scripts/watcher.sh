#!/bin/bash
# Tarot Club — Auto-watcher
# Monitors tarot-plan/status.md and nudges the right member when it's their turn.
# Usage: ./watcher.sh [project-path]

PROJECT_PATH="${1:-$(pwd)}"
STATUS_FILE="$PROJECT_PATH/tarot-plan/status.md"
SESSION="tarot-club"
LAST_ACTIVE=""

# Map member name to tmux pane index
get_pane() {
    case "$1" in
        the-fool)        echo "0" ;;
        the-justice)     echo "1" ;;
        the-sun)         echo "2" ;;
        the-hanged-man)  echo "3" ;;
        *)               echo "" ;;
    esac
}

# Map member name to emoji label
get_label() {
    case "$1" in
        the-fool)        echo "🃏" ;;
        the-justice)     echo "⚖️" ;;
        the-sun)         echo "☀️" ;;
        the-hanged-man)  echo "🔵" ;;
        *)               echo "❓" ;;
    esac
}

# Extract active member from status file
get_active_member() {
    if [ -f "$STATUS_FILE" ]; then
        # "## Active Member" is a heading, value is on the next line
        sed -n '/^## Active Member/{n;p;}' "$STATUS_FILE" 2>/dev/null | tr -d '[:space:]' | tr '[:upper:]' '[:lower:]'
    fi
}

# Get the message from status file
get_message() {
    if [ -f "$STATUS_FILE" ]; then
        # Get everything after "## Message"
        sed -n '/^## Message/,/^## /{ /^## Message/d; /^## /d; p; }' "$STATUS_FILE" 2>/dev/null | head -5
    fi
}

# Send nudge to a pane
nudge() {
    local member="$1"
    local pane="$2"
    local label="$3"
    local message="$4"

    if [ -z "$pane" ]; then
        return
    fi

    # Check if tmux session exists and pane is alive
    if ! tmux has-session -t "$SESSION" 2>/dev/null; then
        echo "[$(date '+%H:%M:%S')] Session 'tarot-club' not found. Exiting."
        exit 0
    fi

    echo "[$(date '+%H:%M:%S')] Activating $label $member — nudge sent to pane $pane"

    # Send the nudge message to the member's pane
    tmux send-keys -t "$SESSION:tarot-club.$pane" "" Enter
    sleep 1
    tmux send-keys -t "$SESSION:tarot-club.$pane" "The status file has been updated. You are now the active member. Read tarot-plan/status.md and do your work. Message from the team: $message" Enter
}

# Check status and nudge if needed
check_and_nudge() {
    local active
    active=$(get_active_member)

    if [ -z "$active" ]; then
        return
    fi

    # Only nudge if the active member changed
    if [ "$active" != "$LAST_ACTIVE" ]; then
        local pane
        local label
        local message

        pane=$(get_pane "$active")
        label=$(get_label "$active")
        message=$(get_message)

        if [ -n "$pane" ]; then
            nudge "$active" "$pane" "$label" "$message"
        fi

        LAST_ACTIVE="$active"
    fi
}

echo "🃏 Tarot Club Watcher started"
echo "   Watching: $STATUS_FILE"
echo "   Session:  $SESSION"
echo "   Press Ctrl+C to stop"
echo ""

# Initial check — nudge whoever is currently active
# Set LAST_ACTIVE to a dummy so the first real member always triggers
LAST_ACTIVE="__none__"
check_and_nudge

# Watch for file changes
while true; do
    # Wait for status file to be modified
    if [ -f "$STATUS_FILE" ]; then
        inotifywait -q -e modify -e create -e moved_to "$STATUS_FILE" 2>/dev/null
        sleep 1  # Small delay to let the file finish writing
        check_and_nudge
    else
        # Status file doesn't exist yet, wait for it
        sleep 2
    fi
done
