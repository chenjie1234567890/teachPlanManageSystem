import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MajorService} from "../../../../../service/major.service";
import {CourseService} from "../../../../../service/course.service";

@Component({
  selector: 'app-major-add',
  templateUrl: './major-add.component.html',
  styleUrls: ['./major-add.component.css']
})
export class MajorAddComponent implements OnInit {
  addForm: FormGroup;
  courseOptions: Array<{ label: string; value: string }> = [];
  constructor(private fb: FormBuilder,
              private majorService: MajorService,
              private courseService: CourseService) { }
  initForm() {
    this.addForm = this.fb.group({
      name: ['', [Validators.required]],
      courseList: [null, []]
    });
  }

  initOptions() {
    this.courseService.getAllCourse().subscribe((data) => {
      console.log(data)
    }, () => {
      console.log('error')
    });
  }

  // 重置输入
  resetForm() {
    this.addForm.reset();
    for (const key in this.addForm.controls) {
      this.addForm.controls[key].markAsPristine();
      this.addForm.controls[key].updateValueAndValidity();
    }
  }

  //

  submitForm() {
    const major = this.addForm.value;
    console.log(major);
    // this.majorService.add(major).subscribe(() => {
    //   console.log('success');
    // }, () => {
    //   console.log('error');
    // });
  }

  ngOnInit() {
    this.initForm();
  }

}
