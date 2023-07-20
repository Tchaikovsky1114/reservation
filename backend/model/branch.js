const branches = [];

module.exports = class Branch {
    constructor(name, address, tel, image, id, status, description, location) {
        this.branchName = name;
        this.branchAddress = address;
        this.branchTel = tel;
        this.branchImage = image;
        this.branchId = id;
        this.branchStatus = status;
        this.branchDescription = description;
        this.branchLocation = location;
    }

    save() {
        branches.push({
            name: this.name,
            address: this.address,
            tel: this.tel,
            image: this.image,
            id: this.id,
            status: this.status,
            description: this.description,
            location: this.location
        });
    }

    static fetchAll() {
        return branches;
    }
}