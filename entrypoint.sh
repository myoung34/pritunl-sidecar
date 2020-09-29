#!/bin/bash
exec mongo --eval "var hostName = '${PRITUNL_HOSTNAME}'" --host "${PRITUNL_MONGODB_URI}" /mongo-attach-all.js
