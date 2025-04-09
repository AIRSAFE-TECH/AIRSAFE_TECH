import { IUserRepository } from "../../domain/repository/IUserRepository";
import { UserApiDataSource } from "../dataSource/UserApiDataSource";
import { UserEntity } from "../entities/UserEntity";

export class UserRepositoryImpl extends IUserRepository {
    constructor(apiDataSource = new UserApiDataSource()) {
        super();
        this.apiDataSource = apiDataSource;
    }

    async loginUser(credentials) {
        const data = await this.apiDataSource.loginUser(credentials);
        return new UserEntity(data);
    }
}