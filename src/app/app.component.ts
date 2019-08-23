import { Component } from '@angular/core';
import { NavigationModel } from './navigation-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngForRecursion';
  public list: NavigationModel[] = [
    {
      title: 'Section 1',
      children: []
    },
    {
      title: 'Section 2',
      children: [
        {
          title: 'Section 2.1',
          children: []
        },
        {
          title: 'Section 2.2',
          children: []
        },
        {
          title: 'Section 2.3',
          children: []
        }
      ]
    },
    {
      title: 'Section 3',
      children: [
        { title: 'Section 3.1', children: [] },
        {
          title: 'Section 3.2',
          children: [
            {
              title: 'Section 3.2.1',
              children: []
            },
            {
              title: 'Section 3.2.2',
              children: []
            },
            {
              title: 'Section 3.2.3',
              children: [
                {
                  title: 'Section 3.2.3.1',
                  children: []
                },
                {
                  title: 'Section 3.2.3.2',
                  children: []
                }
              ]
            }
          ]
        },
        {
          title: 'Section 3.3',
          children: [
            {
              title: 'Section 3.3.1',
              children: []
            },
            {
              title: 'Section 3.3.2',
              children: []
            }
          ]
        }
      ]
    }
  ];
}
