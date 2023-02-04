<script setup>
import { useCourse } from "../stores/course";
import { useSelect } from "../stores/addsub";
const { course } = useCourse();
const { select, add_subject, remove_subject, restart } = useSelect();
</script>
<template>
  <div class="container mt-5 text-center">
    <div class="row mt-2" style="font-size: 22px; color: black">
      <div class="col text-start">รายวิชา</div>
      <div class="col-2">
        <div class="row">
          <button
            class="col btn btn-success w-50"
            data-bs-target="#selectSubject"
            data-bs-toggle="modal"
          >
            เพิ่ม
          </button>
          <button class="col btn btn-danger w-50" @click="remove_subject(n - 1)">
            ยกเลิก
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="row mt-3" style="font-size: 22px; color: black">
    <div class="col">
      <div>รหัสวิชา</div>
    </div>
    <div class="col">
      <div>ชื่อวิชา</div>
    </div>
    <div class="col">
      <div>กลุ่ม</div>
    </div>
    <div class="col-2">
      <div></div>
    </div>
  </div>
  <div class="row m-3" v-for="n in select.length">
    <div class="col" v-if="select && select[n - 1]">
      {{ select[n - 1].code }}
    </div>
    <div class="col" v-if="select && select[n - 1]">{{ select[n - 1].name }}<br /></div>
    <div class="col" v-if="select && select[n - 1]">
      {{ select[n - 1].group }}
    </div>
    <div class="col-2">
      <button class="col btn btn-danger w-50" @click="remove_subject(n - 1)">
        ยกเลิก
      </button>
    </div>
  </div>
  <div class="mt-5 text-end" v-if="select.length >= 3">
    <button class="btn btn-success me-3" data-bs-target="#confirm" data-bs-toggle="modal">
      ยืนยัน
    </button>
    <button class="btn btn-danger me-3" @click="restart">ยกเลิก</button>
  </div>

  <div
    class="modal fade"
    id="selectSubject"
    aria-hidden="true"
    aria-labelledby="selectSubjectToggleLabel"
    tabindex="-1"
  >
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="selectSubjectToggleLabel">
            เลือกวิชาที่ต้องการ
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="container text-center">
            <div class="row" style="font-size: 22px; color: black">
              <div class="col">
                <div>รหัสวิชา</div>
              </div>
              <div class="col">
                <div>ชื่อวิชา</div>
              </div>
              <div class="col">
                <div>กลุ่ม</div>
              </div>
              <div class="col-2">
                <div></div>
              </div>
            </div>
            <div class="row mt-3" v-for="n in course.length">
              <div class="col" v-if="course && course[n - 1]">
                {{ course[n - 1].code }}
              </div>
              <div class="col" v-if="course && course[n - 1]">
                {{ course[n - 1].name }}<br />
              </div>
              <div class="col" v-if="course && course[n - 1]">
                {{ course[n - 1].group }}
              </div>
              <div class="col-2">
                <button
                  class="col btn btn-success w-50"
                  @click="
                    add_subject(
                      course[n - 1].code,
                      course[n - 1].name,
                      course[n - 1].group
                    )
                  "
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  เพิ่ม
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal fade"
    id="confirm"
    aria-hidden="true"
    aria-labelledby="confirmToggleLabel"
    tabindex="-1"
  >
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="confirmToggleLabel">วิชาที่เลือกไว้</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="container text-center">
            <div class="row" style="font-size: 22px; color: black">
              <div class="col">
                <div>รหัสวิชา</div>
              </div>
              <div class="col">
                <div>ชื่อวิชา</div>
              </div>
              <div class="col">
                <div>กลุ่ม</div>
              </div>
            </div>
            <div
              class="row m-3"
              v-for="n in select.length"
              v-if="select && select.length > 0"
            >
              <div class="col" v-if="select && select[n - 1]">
                {{ select[n - 1].code }}
              </div>
              <div class="col" v-if="select && select[n - 1]">
                {{ select[n - 1].name }}<br />
              </div>
              <div class="col" v-if="select && select[n - 1]">
                {{ select[n - 1].group }}
              </div>
            </div>
          </div>
        </div>
        <div class="modal-foot mt-2 mb-3 text-end">
          <button
            class="btn btn-success me-3"
            data-bs-target="#finish"
            data-bs-toggle="modal"
          >
            ยืนยัน
          </button>
          <button class="btn btn-danger me-3" data-bs-dismiss="modal" aria-label="Close">
            ยกเลิก
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal fade"
    id="finish"
    aria-hidden="true"
    aria-labelledby="finishToggleLabel2"
    tabindex="-1"
    @click="this.$router.go(0)"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body text-center" style="font-size: larger; color: black">
          Suscess
        </div>
      </div>
    </div>
  </div>
</template>
