import { Component, OnInit, OnDestroy } from '@angular/core';
import { FilterButton, Filter } from 'src/app/models/filtering.model';
import { TodoService } from 'src/app/services/todo.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  filterButtons: FilterButton[] = [
    { type: Filter.All, label: 'All', active: true},
    { type: Filter.Completed, label: 'Completed', active: false},
    { type: Filter.Active, label: 'Active', active: false},
  ];

  length = 0;
  selectAll = 'selectAll';
  hasComplete: Observable<boolean>;
  destroy$: Subject<null> = new Subject<null>();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.hasComplete = this.todoService.todos$.pipe(
      map(todos => todos.some(t => t.isCompleted)),
      takeUntil(this.destroy$)
    );

    this.todoService.length$.pipe(takeUntil(this.destroy$)).subscribe(length => {
      this.length = length;
    })
  }

  toggleAll() {
    this.todoService.toggleAll();
  }

  filter(type: Filter) {
    this.setActiveFilteBtn(type);
    this.todoService.filterTodos(type);
  }

  clearCompleted() {
    this.todoService.clearCompleted();
  }

  private setActiveFilteBtn(type: Filter) {
    this.filterButtons.forEach(btn => {
      btn.active = btn.type === type;
    })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
