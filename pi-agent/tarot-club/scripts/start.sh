#!/bin/bash
# Tarot Club — Start the team in tmux
# Usage: ./start.sh [project-path]

PROJECT_PATH="${1:-$(pwd)}"
TAROT_CLUB_DIR="$(cd "$(dirname "$0")/.." && pwd)"
SCRIPTS_DIR="$TAROT_CLUB_DIR/scripts"
SESSION="tarot-club"

# Kill existing session if any
tmux kill-session -t "$SESSION" 2>/dev/null

# Create new session with The Fool on the left
tmux new-session -d -s "$SESSION" -c "$PROJECT_PATH" -n "tarot-club"

# Split right side (The Justice - top right)
tmux split-window -h -t "$SESSION" -c "$PROJECT_PATH"

# Split bottom right (The Sun - middle right)
tmux split-window -v -t "$SESSION:tarot-club.1" -c "$PROJECT_PATH"

# Split bottom right again (The Hanged Man - bottom right)
tmux split-window -v -t "$SESSION:tarot-club.2" -c "$PROJECT_PATH"

# Start pi in each pane with their skill
# Pane 0: The Fool (left)
tmux select-pane -t "$SESSION:tarot-club.0" -T "🃏 The Fool"
tmux send-keys -t "$SESSION:tarot-club.0" "pi --skill $TAROT_CLUB_DIR/the-fool/SKILL.md" Enter

# Pane 1: The Justice (top right)
tmux select-pane -t "$SESSION:tarot-club.1" -T "⚖️ The Justice"
tmux send-keys -t "$SESSION:tarot-club.1" "pi --skill $TAROT_CLUB_DIR/the-justice/SKILL.md" Enter

# Pane 2: The Sun (middle right)
tmux select-pane -t "$SESSION:tarot-club.2" -T "☀️ The Sun"
tmux send-keys -t "$SESSION:tarot-club.2" "pi --skill $TAROT_CLUB_DIR/the-sun/SKILL.md" Enter

# Pane 3: The Hanged Man (bottom right)
tmux select-pane -t "$SESSION:tarot-club.3" -T "🔵 The Hanged Man"
tmux send-keys -t "$SESSION:tarot-club.3" "pi --skill $TAROT_CLUB_DIR/the-hanged-man/SKILL.md" Enter

# Wait for all pi sessions to initialize
sleep 8

# Send initial prompts to each member
# The Justice: watch for activation
tmux send-keys -t "$SESSION:tarot-club.1" "You are The Justice. Your job is to watch tarot-plan/status.md and act when the Active Member is 'the-justice'. When activated, read the prompt/plan files and do your work. Say '⚖️ The Justice is ready and waiting.'" Enter

# The Sun: watch for activation
sleep 2
tmux send-keys -t "$SESSION:tarot-club.2" "You are The Sun. Your job is to watch tarot-plan/status.md and act when the Active Member is 'the-sun'. When activated, read tarot-plan/architecture.md and create the project skeleton. Say '☀️ The Sun is ready and waiting.'" Enter

# The Hanged Man: watch for activation
sleep 2
tmux send-keys -t "$SESSION:tarot-club.3" "You are The Hanged Man. Your job is to watch tarot-plan/status.md and act when the Active Member is 'the-hanged-man'. When activated, read the plan files and start coding. Say '🔵 The Hanged Man is ready and waiting.'" Enter

# The Fool: start the conversation
sleep 2
tmux send-keys -t "$SESSION:tarot-club.0" "You are The Fool, the leader of the Tarot Club. Welcome the user and ask them to describe their project. Tell them to say 'amen' when they're ready to start." Enter

# Make The Fool's pane larger
tmux select-layout -t "$SESSION" even-horizontal

# Focus on The Fool
tmux select-pane -t "$SESSION:tarot-club.0"

# Start the auto-watcher in the background
"$SCRIPTS_DIR/watcher.sh" "$PROJECT_PATH" &
WATCHER_PID=$!

echo ""
echo "🃏 Tarot Club session created!"
echo "   Watcher PID: $WATCHER_PID"
echo ""
echo "  tmux attach -t tarot-club"
echo ""
echo "To stop everything:"
echo "  tmux kill-session -t tarot-club"
echo "  kill $WATCHER_PID"
echo ""
