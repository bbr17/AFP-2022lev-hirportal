import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { News } from 'src/app/models/News';
import { NewsService } from 'src/app/services/news.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.scss'],
})
export class CreateNewsComponent implements OnInit {
  @ViewChild('createNewsFormDirective')
  createNewsFormDirective: NgForm;
  @Output() create: EventEmitter<any> = new EventEmitter();
  createNewsForm: FormGroup = this.initFormGroup();
  isOpen = false;

  constructor(
    private newsService: NewsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  initFormGroup(): FormGroup {
    return new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      content: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  onSubmit(formData: News): void {
    this.newsService
      .createNews(formData)
      .pipe(first())
      .subscribe(() => {
        this.create.emit(null);
      });
    this.createNewsForm.reset();
  }
}
