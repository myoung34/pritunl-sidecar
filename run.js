// remove lingering Offline hosts
db.hosts.remove({'status': 'offline'});
// update hosts that arent the hostName to have the hostname
db.hosts.updateMany({'public_address': {$ne: hostName}}, {$set: {'public_address': hostName}});

// Update server(s) to attach all online hosts
var hostIds = db.hosts.find({'status': 'online'}, {_id:1}).map(function(item){ return item._id; });
db.servers.update({}, {$set: {'hosts': hostIds}});

// If any servers are offline but have instances attached, start them
db.servers.updateMany({'status': 'offline'}, {$set: {'status': 'online'}});

// Update the certificate from cert-manager
db.servers.update({_id:'app'}, {$set: {'server_cert': leCertificate}});
db.servers.update({_id:'app'}, {$set: {'server_key': lePrivateKey}});
