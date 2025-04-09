export class UserEntity {
    constructor({ token, user, role, id }) {
        this.token = token;
        this.user = user;
        this.role = role;
        this.id = id;
    }
}