#!/bin/bash
exec mongo --eval "var leCertificate = '${PRITUNL_LE_CRT}'; var lePrivateKey = '${PRITUNL_LE_KEY}'; var hostName = '${PRITUNL_HOSTNAME}'" --host "${PRITUNL_MONGODB_URI}" /run.js
