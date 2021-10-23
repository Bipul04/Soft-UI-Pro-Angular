import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css'],
})
export class Profile {
  raw6m8h: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Profile - Soft UI Pro')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Profile - Soft UI Pro',
      },
    ])
  }
}
