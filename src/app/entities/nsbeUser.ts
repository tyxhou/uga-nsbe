export class nsbeUser {
    private _fName: String;
    public get fName(): String {
        return this._fName;
    }
    public set fName(value: String) {
        this._fName = value;
    }

    private _lName: String;
    public get lName(): String {
        return this._lName;
    }
    public set lName(value: String) {
        this._lName = value;
    }

    private _email: String;
    public get email(): String {
        return this._email;
    }
    public set email(value: String) {
        this._email = value;
    }

    private _myId: String;
    public get myId(): String {
        return this._myId;
    }
    public set myId(value: String) {
        this._myId = value;
    }

    private _points: Number;
    public get points(): Number {
        return this._points;
    }
    public set points(value: Number) {
        this._points = value;
    }

    private _password: String;
    public get password(): String {
        return this._password;
    }
    public set password(value: String) {
        this._password = value;
    }

    private _admin: boolean;
    public get admin(): boolean {
        return this._admin;
    }
    public set admin(value: boolean) {
        this._admin = value;
    }

    constructor(
        fName: String,
        lName: String,
        email: String,
        myId: String,
        points: number,
        password: String,
        admin: boolean
    ){
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.myId = myId;
        this.points = points;
        this.password = password;
        this.admin = admin;
    }

}