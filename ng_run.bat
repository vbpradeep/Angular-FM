call npm i


call gulp Production-mode
call npm i

start cmd.exe /k "npm run start"

TIMEOUT /T 150
call gulp e2e-ci-test
call gulp test-report
call gulp copy-file-report
call gulp send-mail



