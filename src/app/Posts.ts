export class Posts {
  public title: string;
  public imageUrl: string;
  public username: string;
  public content: string;

  constructor(
    _title: string,
    _imageUrl: string,
    _username: string,
    _content: string
  ) {
    this.title = _title;
    this.imageUrl = _imageUrl;
    this.username = _username;
    this.content = _content;
  }
}
