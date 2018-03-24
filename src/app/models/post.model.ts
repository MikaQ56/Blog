export class Post {

	loveIts: number;
	created_at: any;

	constructor(public title: string, public content: string) {

		this.created_at = new Date();
	}

}