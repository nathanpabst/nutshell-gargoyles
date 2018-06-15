const {savedTaskDom,} = require ('./tasksDom');

const singleTask = {
  userUid: '5ykBb0xyadPZLgH4EPO4i88HIql2',
  task: 'Take out garbage',
  isCompleted: true,
};

const showTaskResults = () => {
  savedTaskDom([singleTask, singleTask, singleTask, singleTask,]);
};

module.exports = showTaskResults;
