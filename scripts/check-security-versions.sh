#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

echo "Checking Next.js / React security versions..."
npx --yes fix-react2shell-next

echo ""
echo "Installed versions:"
pnpm list next react react-dom --depth 0
