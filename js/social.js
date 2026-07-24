document.addEventListener('DOMContentLoaded', function() {
  var container = document.querySelector('.card-info-social-icons');
  if (container) {
    container.innerHTML = '';
    var links = [
      { href: 'https://github.com/chai-07', icon: 'fab fa-github', color: '#24292e', title: 'Github' },
      { href: 'mailto:sunxiaoxin2025@163.com', icon: 'fas fa-envelope', color: '#417ebe', title: 'Email' },
      { href: 'https://blog.csdn.net/2503_94039558?type=blog', icon: 'fas fa-blog', color: '#fc5531', title: 'CSDN' }
    ];
    links.forEach(function(item) {
      var a = document.createElement('a');
      a.className = 'social-icon';
      a.href = item.href;
      a.target = '_blank';
      a.title = item.title;
      a.style.display = 'inline-block';
      a.style.margin = '0 8px';
      a.style.fontSize = '24px';
      var i = document.createElement('i');
      i.className = item.icon;
      i.style.color = item.color;
      a.appendChild(i);
      container.appendChild(a);
    });
  }
});