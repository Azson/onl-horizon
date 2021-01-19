export const SubmitStatus = {
  SEND_STEP_SUBMIT:0,
  SEND_STEP_CREATE:1,
  SEND_STEP_RUN:2,

  SUBMIT_WAITING: 10,
  SUBMIT_PROCESSING: 11,
  SUBMIT_SUCCEEDED: 12,
  SUBMIT_FAILED: 13,

  CREATE_WAITING: 20,
  CREATE_PROCESSING: 21,
  CREATE_SUCCEEDED: 22,
  CREATE_FAILED: 23,

  RUN_WAITING: 30,
  RUN_PROCESSING: 31,
  RUN_SUCCEEDED: 32,
  RUN_FAILED: 33,

};

export const StepToTab = {
  STEP_FIRST: 0,
  STEP_SECOND: 1,
  STEP_THIRD: 2,
  STEP_VERIFY: 3,
  STEP_LAST: 4
};
