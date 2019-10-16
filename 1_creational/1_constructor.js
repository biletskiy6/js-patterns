// function Server(name, ip) {
//     this.name = name;
//     this.ip = ip;
// }

// Server.prototype.getUrl = function () {
//     return `https://${this.ip}:80`;
// }

// const aws = new Server('AWS German', '82.21.47.56');
// console.log(aws.getUrl());

class Server {
    constructor(name, ip) {
        this.name = name;
        this.ip = ip;
    }
    getUrl() {
        return `https://${this.ip}:80`;
    }
}
const aws = new Server('AWS German', '82.121.47.56');
console.log(aws.getUrl());