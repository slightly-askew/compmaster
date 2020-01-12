export interface comp {
  name: string
  age_groups: Array<ageGroup>
  gender: 'mens' | 'ladies' | 'mixed'
  format: 'ladder' | 'knockout' | 'groups'
  qualifying?: {
    groups: number
    legs: number
  }
}

export interface ageGroup {
  label: string
  dob_from: Date
  dob_to: Date
  mens: boolean
  ladies: boolean
  mixed: boolean
}

export interface match {}

export interface compFormat {}