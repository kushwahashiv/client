import {Component, OnInit} from '@angular/core';
import {AdminApiService} from './admin-api.service';
import {User} from '../common/user';
import {MatDialog, MatDialogConfig, MatSnackBar} from '@angular/material';
import {AddUserComponent} from '../add-user/add-user.component';

@Component({
    selector: 'admin-layout',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
    title = 'Angular Client';
    displayedColumns = ['id', 'name', 'email', 'active', 'actions'];
    users: Array<User>;

    constructor(private adminApiService: AdminApiService,
                private snackBar: MatSnackBar,
                public dialog: MatDialog) {
    }

    ngOnInit() {
        this.getUsres();
    }

    getUsres() {
        this.adminApiService.getUsers()
            .subscribe((users: Array<User>) => {
                this.users = users;
            });
    }

    deleteUser(user: User) {
        this.adminApiService.deleteUser(user.id)
            .subscribe(() => {
                this.getUsres();
                this.snackBar.open('User record delete', 'Ok', {duration: 5000});
            });
    }

    addUser(user: User) {
        const dialogRef = this.dialog.open(AddUserComponent, <MatDialogConfig>{
            width: '450px',
            disableClose: true,
            hasBackdrop: true,
            role: 'dialog',
        });
        dialogRef.afterClosed().subscribe((prospect: User) => {
            this.getUsres();
        });
    }

    assignRoles(user: User) {
        // TODO: Implement role enable below
        /*
        this.adminApiService.assignRoles(user.id)
            .subscribe(() => {
                this.snackBar.open('Roles assigned', 'Ok', {duration: 5000});
            });
            */
    }
}
