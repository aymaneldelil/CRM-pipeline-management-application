import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { PipelineService } from 'src/app/features/pipeline-feature/services/pipeline.service';
import { Ideals } from 'src/app/features/pipeline-feature/interfaces/ideals';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  tap,
} from 'rxjs';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

//---------------------------------------------------------------------------------------------------------------------------------------------------

enum _statusEnum {
  status_1 = 'Potential Value',
  status_2 = 'Contact Made',
  status_3 = 'Offer Sent',
  status_4 = 'Getting Ready',
  status_5 = 'Focus',
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss'],
})
export class DealsComponent implements OnInit {
  public isloading: boolean = true;
  //---------------------------------------------------------------------------------------------------------------------------------------------------
  public potentialValue: Array<Ideals> = [];
  public focus: Array<Ideals> = [];
  public contactMade: Array<Ideals> = [];
  public offerSent: Array<Ideals> = [];
  public gettingReady: Array<Ideals> = [];
  //---------------------------------------------------------------------------------------------------------------------------------------------------
  public search_fg!: FormGroup;
  constructor(private pipelineSVC: PipelineService, private _fb: FormBuilder) {}
  //---------------------------------------------------------------------------------------------------------------------------------------------------
  ngOnInit(): void {
    this.initialValues();
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------------
  private initialValues(): void {
    this.sortDeals();

    this.search_fg = this._fb.group({
      search_fc: ['', Validators.minLength(3)],
    });

    this.searchInDeals();
  }

  //---------------------------------------------------------------------------------------------------------------------------------------------------
  private sortDeals() {
    this.pipelineSVC
      .getDeals()
      .pipe(
        map((m) => {
          m.map((deal) => {
            switch (deal.status) {
              case _statusEnum.status_1:
                this.potentialValue.push(deal);
                break;
              //--------------
              case _statusEnum.status_2:
                this.contactMade.push(deal);
                break;
              //--------------
              case _statusEnum.status_3:
                this.offerSent.push(deal);
                break;
              //--------------
              case _statusEnum.status_4:
                this.gettingReady.push(deal);
                break;
              //--------------
              case _statusEnum.status_5:
                this.focus.push(deal);
                break;
              default:
                break;
            }
          });
        })
      )
      .subscribe({
        complete: () => {
          this.isloading = !this.isloading;
        },
      });
  }

  //---------------------------------------------------------------------------------------------------------------------------------------------------
  public drop(event: CdkDragDrop<Ideals[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  //---------------------------------------------------------------------------------------------------------------------------------------------------

  searchInDeals() {
    this.search_fg
      .get('search_fc')
      ?.valueChanges.pipe(debounceTime(400))
      .subscribe({
        next: (searchValue: string) => {
          this.potentialValue = this.potentialValue.filter((deal: Ideals) => {
            return deal.first_name
              .toLowerCase()
              .includes(searchValue.toLowerCase());
          });
        },
      });
  }
}
