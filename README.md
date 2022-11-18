## Git Config
Sau khi fork repo này về, hãy sử dụng git clone repo đã fork về máy
```bash
git clone https://github.com/<username>/UWC_2.0.git
```
Sau đó, set up remote upstream để pull code mới nhất về
```bash
git remote add upstream https://github.com/NguyenXuanTrinh/UWC_2.0.git
```
Để pull code mới nhất về, sử dụng lệnh:
```bash
git pull upstream master
```
Sau đó code phần của mình và commit code lên repo của mình
```bash
git add .
git commit -m "commit message"
git push origin master
```
Sau đó, tạo pull request trên Github để gửi code của mình lên repo chính thức.
