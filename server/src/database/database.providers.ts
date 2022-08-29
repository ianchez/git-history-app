import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { ConfigService } from '@nestjs/config';

/**
 * SEQUELIZE variables are stored in a file named
 * '.env' so it can be easily reused anywhere
 * without being subject to human error.
 */

const getConfigVars = (configService: ConfigService): SequelizeOptions => {
  if (process.env.PRODUCTION) {
    return {
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    };
  } else {
    return {
      host: configService.get<string>('DB_HOST'),
      port: configService.get<number>('DB_PORT'),
      username: configService.get<string>('DB_USERNAME'),
      password: configService.get<string>('DB_PASSWORD'),
      database: configService.get<string>('DB_NAME'),
    };
  }
};

export const databaseProviders = [
  {
    provide: '',
    useFactory: async (configService: ConfigService) => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        ...getConfigVars(configService),
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
