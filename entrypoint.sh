#!/bin/bash
exec mongo --host "${PRITUNL_MONGODB_URI}" /mongo-attach-all.js
