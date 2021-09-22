import { Category } from "src/category/entities/category.entity";
import { Coach } from "src/coach/entities/coach.entity";
import { Video } from "src/video/entities/video.entity";
import { MigrationInterface, getRepository } from "typeorm";
import { User } from '../src/user/entities/user.entity';
import * as bcrypt from 'bcrypt';

export class InitDatabase1621413346769 implements MigrationInterface {

    public async up(): Promise<void> {
        
        /* Create User admin root */

        const userRepository = getRepository(User);

        const users: Array<User> = await userRepository.find({where: {username: 'root'}})

        if (users.length === 0) {
            const user: User = new User()
            user.username = "root";
            user.email = "root@email.com";
            user.password = bcrypt.hashSync("root", 10);
            user.is_admin =  true;
            await userRepository.save(user);
        }

        /* Create basics Categories */

        const categoryRepository = getRepository(Category);
        
        let categories: Array<Category> = [];

        if (! await categoryRepository.findOne({where: {name: "CrossFit"}})) {
            let category : Category = new Category();
            category.name = "CrossFit";  
            categories.push(category) 
        }

        if (! await categoryRepository.findOne({where: {name: "Yoga"}})) {
            let category : Category = new Category();
            category.name = "Yoga";  
            categories.push(category) 
        }

        if (! await categoryRepository.findOne({where: {name: "Fitness"}})) {
            let category : Category = new Category();
            category.name = "Fitness";  
            categories.push(category) 
        }

        if (! await categoryRepository.findOne({where: {name: "Stretching"}})) {
            let category : Category = new Category();
            category.name = "Stretching";  
            categories.push(category) 
        }

        if (! await categoryRepository.findOne({where: {name: "Danse"}})) {
            let category : Category = new Category();
            category.name = "Danse";  
            categories.push(category) 
        }
        
        await categoryRepository.save(categories)
            
        /* Create a Coach */

        const coachRepository = getRepository(Coach);

        const coach: Coach = new Coach();
        coach.name = "Zlatan";
        coach.description = "Je suis un super coach";
        coach.photo = "default.png";
        const savedCoach: Coach = await coachRepository.save(coach);
            
        /* Create a video */

        const videoRepository = getRepository(Video);

        const video: Video = new Video();
        video.title = "Video";
        video.link = "https://www.youtube.com/embed/tea8ZNk5A";
        video.coach = savedCoach;
        video.category = await categoryRepository.findOne({where: {name: "Danse"}});

        await videoRepository.save(video);
        
    }

    public async down(): Promise<void> {
        
    }

}
