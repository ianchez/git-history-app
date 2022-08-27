import { Sequelize } from 'sequelize-typescript';
import { ConfigService } from '@nestjs/config';

/**
 * SEQUELIZE variables are stored in a file named
 * '.env' so it can be easily reused anywhere
 * without being subject to human error.
 */

export const databaseProviders = [
  {
    provide: '',
    useFactory: async (configService: ConfigService) => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
      });

      /**
       * Add Models Here
       * ===============
       * You can add the models to
       * Sequelize later on.
       */
      // sequelize.addModels([User]);

      await sequelize.sync();
      return sequelize;
    },
    inject: [ConfigService],
  },
];
