export class LoginUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute(credentials) {
        return await this.userRepository.loginUser(credentials);
    }
}