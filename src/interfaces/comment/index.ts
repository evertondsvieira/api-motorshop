import { IUser } from "../user";

export interface IComment {
  text: string;
  userId: string;
}

export interface ICommentRequest extends IComment {
  id: string;
  user: IUser;
}
