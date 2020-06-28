export class ChildDonaterModel{
    idchild: number;
    iddonate: number;
    total: number;

    constructor(_idchild: number, _iddonate: number, _total: number){
        this.idchild = _idchild;
        this.iddonate = _iddonate;
        this.total = _total;
    }
}