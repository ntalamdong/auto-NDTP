document.getElementById('generate-button').addEventListener('click', generateText);
document.getElementById('copy-button').addEventListener('click', copyToClipboard);

// Hiển thị/ẩn trường lý do sanh mổ
document.getElementById('sanh').addEventListener('change', function() {
  var sanh = this.value;
  var lyDoSanhMoContainer = document.getElementById('ly-do-sanh-mo-container');
  if (sanh === 'mổ') {
    lyDoSanhMoContainer.style.display = 'block';
  } else {
    lyDoSanhMoContainer.style.display = 'none';
    document.getElementById('ly-do-sanh-mo').value = '';
  }
});

function generateText() {
  var tenGoi = document.getElementById('ten-goi').value;
  var tiepXucMat = document.getElementById('tiep-xuc-mat').value;
  // Additional JavaScript logic
}

function copyToClipboard() {
  var tienSuText = document.getElementById('tien-su-text').value;
  var outputText = document.getElementById('output-text').value;
  var fullText = tienSuText + '\n\n' + outputText;

  var tempTextArea = document.createElement('textarea');
  tempTextArea.value = fullText;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand('copy');
  document.body.removeChild(tempTextArea);

  alert('Văn bản đã được sao chép vào clipboard!');
}
