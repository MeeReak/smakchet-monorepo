import { logger } from '@notifications/utils/logger';
import { Channel, ConsumeMessage } from 'amqplib';
import { createQueueConnection } from './connection';
import { IEmailLocals } from '@notifications/utils/@types/email-sender.type';
import EmailSender from '@notifications/utils/email-sender';
import getConfig from '@notifications/utils/config';

// TODO:
// 1. Check If Channel Exist. If Not Create Once
// 2. Define ExchangeName, RoutingKey, QueueName
// 3. Check if Exchange Exist, If Not Create Once
// 4. Check if Queue Exist, If Not Create Once
// 5. Bind the Exchange to Queue by Routing Key
// 6. Consumer: Send Email When there is a message from Queue
export async function consumeAuthEmailMessages(
  channel: Channel
): Promise<void> {
  try {
    if (!channel) {
      channel = (await createQueueConnection()) as Channel;
    }

    const exchangeName = 'smackchet-email-notification';
    const routingKey = 'auth-email';
    const queueName = 'auth-email-queue';

    await channel.assertExchange(exchangeName, 'direct');
    const queue = await channel.assertQueue(queueName, {
      durable: true,
      autoDelete: false,
    });

    await channel.bindQueue(queue.queue, exchangeName, routingKey);

    channel.consume(queue.queue, async (msg: ConsumeMessage | null) => {
      const { receiverEmail, username, verifyLink, template } = JSON.parse(
        msg!.content.toString()
      );

      console.log(
        '============what we got from the queue=============',
        receiverEmail,
        username,
        verifyLink,
        template
      );
      let locals: IEmailLocals;

      switch (template) {
        case 'verifyEmail':
          locals = {
            token: verifyLink,
            appLink: `${getConfig().clientUrl}`,
            appIcon: ``,
            username,
            //verifyLink: `http://localhost:3000/v1/auth/verify?token=${verifyLink}`,
            verifyLink: `${
              getConfig().clientUrl
            }/verify-email?token=${verifyLink}`,
          };
          break;
        case 'forgotPassword':
          locals = {
            appLink: `${getConfig().clientUrl}`,
            appIcon: ``,
            username,
            resetLink: `http://localhost:3001/v1/auth/reset-password/token?token=${verifyLink}`,
          };
          break;
        case 'resetPasswordSuccess':
          locals = {
            appLink: `${getConfig().clientUrl}`,
            appIcon: ``,
            username,
          };
          break;
        default:
          logger.error(`Unknown template: ${template}`);
          return;
      }

      const emailUserSender = EmailSender.getInstance();
      await emailUserSender.sendEmail(template, receiverEmail, locals);

      // Acknowledgement
      channel.ack(msg!);
    });
  } catch (error) {
    logger.error(
      `NotificationService EmailConsumer consumeAuthEmailMessages() method error: ${error}`
    );
  }
}

// export async function consumeSubmissionEmailMessages(
//   channel: Channel
// ): Promise<void> {
//   try {
//     if (!channel) {
//       channel = (await createQueueConnection()) as Channel;
//     }

//     const exchangeName = 'microsample-submission-notification';
//     const routingKey = 'submission-email';
//     const queueName = 'submission-email-queue';

//     await channel.assertExchange(exchangeName, 'direct');
//     const queue = await channel.assertQueue(queueName, {
//       durable: true,
//       autoDelete: false,
//     });
//     await channel.bindQueue(queue.queue, exchangeName, routingKey);

//     channel.consume(queue.queue, async (msg: ConsumeMessage | null) => {

//     });
//   } catch (error) {
//     logger.error(
//       `NotificationService EmailConsumer consumeAuthEmailMessages() method error: ${error}`
//     );
//   }
// }
