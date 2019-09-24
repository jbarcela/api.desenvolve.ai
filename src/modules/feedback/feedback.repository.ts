import { EntityRepository, getRepository, Repository } from 'typeorm';
import { Feedback } from './feedback.entity';

@EntityRepository(Feedback)
export class FeedbackRepository extends Repository<Feedback> {

    findByDonator(userDonatorId: string) {

        return getRepository(Feedback)
            .createQueryBuilder('feedbacks')
            .where('feedbacks.user_donator_id = :id', {id : userDonatorId})
            .getMany();
    }

    findByReceiver(userReceiverId: string) {

        return getRepository(Feedback)
            .createQueryBuilder('feedbacks')
            .where('feedbacks.user_receiver_id = :id', {id : userReceiverId})
            .getMany();
    }
}
