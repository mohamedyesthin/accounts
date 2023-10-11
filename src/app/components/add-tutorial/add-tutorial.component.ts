import { Component } from '@angular/core';
import { Account } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent {

  account: Account = {
    name: '',
    purpose: '',
    GivenAmount:'',
    ExpenseAmount:''
    // published: false
  };
  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  saveAccount(): void {
    const data = {
      name: this.account.name,
      purpose:this.account.purpose,
      GivenAmount:this.account.GivenAmount,
      ExpenseAmount:this.account.ExpenseAmount
    };

    this.tutorialService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newAccount(): void {
    this.submitted = false;
    this.account = {
      name: '',
      purpose: '',
      GivenAmount:'',
      ExpenseAmount:''
      // published: false
    };
  }

}