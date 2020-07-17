#!/bin/sh

set -e

echo "=== APP ENTRYPOINT ==="

COMMAND="$1"

case "$COMMAND" in
  server)
    echo "=== RUNNING SERVER ==="
    yarn start
    ;;
  test)
    echo "=== RUNNING TEST SUITE ==="
    yarn test
    ;;
  lint)
    echo "=== RUNNING LINTER ==="
    yarn lint
    ;;
  bundle)
    echo "=== RUNNING LINTER ==="
    yarn install --check-files
    ;;
  *)
    echo "=== RUNNING COMAND  $*==="
    sh -c "$*"
    ;;
esac