/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { BlogController } from './/blog.controller';
import { BlogRepository } from './blog.repository';
import { BlogService } from './blog.service';
import { commentRepository } from './comment.repository';

@Module({
  controllers: [BlogController],
  providers: [BlogService],
  imports: [TypeOrmModule.forFeature([BlogRepository]), UserModule,TypeOrmModule.forFeature([commentRepository])],
})
export class BlogModule {}
