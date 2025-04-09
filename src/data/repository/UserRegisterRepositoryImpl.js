import { IUserRepository } from "../../domain/repository/IUserRepository";
import { UserDataSource } from "../dataSource/UserRegisterDataSource";

export class UserRepositoryImpl extends IUserRepository {
    constructor() {
        super();
        this.userDataSource = new UserDataSource();
    }

    async register(userEntity) {
        return await this.userDataSource.register(userEntity);
    }
}
