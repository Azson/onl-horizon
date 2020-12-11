import {get, post, deleteData, patch} from './http';

const createJobDefaultParams = {"RequiredMachineNumber": 2, "userId": 'E0000003-0000-0000-0000-000000000003'};
// local test
// const baseUrl = '/api'
// vm test
const baseUrl = 'https://api.opennetlab.org/api';

// create job
export const sendCreateJobReq = (params = {}) => {
  for (const key of Object.keys(params)) {
    createJobDefaultParams[key] = params[key];
  }
  return post(baseUrl + '/jobs', createJobDefaultParams);
};

// get job list
const getJobListDefaultParams = {userId: '00000000-0000-0000-0000-000000000001'};
export const getJobByUserId = (params = getJobListDefaultParams) => {
  return get(baseUrl + '/display/jobList', params);
};

// get one job info
export const getJobInfo = (jobId) => {
  const infoUrl = baseUrl + '/jobs/' + jobId;
  return get(infoUrl);
};
// get job info list
export const allJobInfo = (userId = 'E0000003-0000-0000-0000-000000000003') => {
  const url = baseUrl + '/display/jobList';
  const param = {'userId': userId};
  return get(url, param);
};


// delete job
export const deleteJob = (jobId, data = {}, header = {}) => {
  const deleteJobId = baseUrl + '/jobs/' + jobId;
  return deleteData(deleteJobId, data, header);
};

// restart job
export const restartJob = (jobId, params = {}) => {
  const restartJobUrl = baseUrl + '/' + jobId + '/restart';
  return post(restartJobUrl, params);
};

// stop job
const defaultParam = '[{"value": 1,"path": "status", "op": "replace"}]';
export const stopJob = (jobId, params = defaultParam) => {
  const stopJobUrl = baseUrl + '/jobs?id=' + jobId;

  return patch(stopJobUrl, params);
};

// download dataset
//GET http://opennetlab.org/api/results/download/e0000001-0000-0000-0000-000000000001?filename=webrtc_send_20201119082250.log,
export const downloadDataset = (jobId, filename) => {
  const downloadUrl = baseUrl + '/results/download/' + jobId;
  const param = {'filename': filename};
  return get(downloadUrl, param);
};


// get user name by user id

export const getUserName = (userId = '00000000-0000-0000-0000-000000000001') => {
  const url = baseUrl + '/users' + '/' + userId;
  return get(url);
};

// run job

const fixedParamForRestartJob = {
  "AppParams": {
    "NetParams": {"ListenTCPPort": 8888}, "RunTime": "100", "TestTimes": "1", "Interval": "50",
    "video_source": {
      "video_disabled": {
        "enabled": false
      },
      "webcam": {
        "enabled": false
      },
      "video_file": {
        "enabled": true,
        "height": 1080,
        "width": 1920,
        "fps": 24,
        "file_path": "C:\\Users\\Administrator\\Downloads\\webrtc\\data\\webrtc_test_video.yuv"
      }
    },
    "audio_source": {
      "microphone": {
        "enabled": false
      },
      "audio_file": {
        "enabled": true,
        "file_path": "C:\\Users\\Administrator\\Downloads\\webrtc\\data\\webrtc_test_audio.wav"
      }
    }
  }, "UserName": "test", "TimeoutSec": "500"
};

export const runProbingApp = () => { //
};
