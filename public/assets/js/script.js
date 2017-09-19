const $addNewApplication = $('#addNewApplication');
const $cancelNewApplication = $('#cancelNewApplication');

$addNewApplication.on('click', () => {
   $('.job_form').toggleClass('hidden');
});
$cancelNewApplication.on('click', () => {
   $('.job_form').addClass('hidden');
});