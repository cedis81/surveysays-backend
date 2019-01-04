#!/bin/bash

API="http://localhost:4741"
URL_PATH="/surveys/${ID}/answers"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "answer": {
      "text": "'"${TEXT}"'"
    }
  }'

echo
