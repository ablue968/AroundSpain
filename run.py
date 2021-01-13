import hashlib

password = '12345678' + 'secreto'
msg = password.encode('utf-8')

hashed_password = hashlib.sha256(msg).hexdigest()

print(hashed_password)

hashed_password = hashlib.sha256(msg).hexdigest()
print(hashed_password)

hashed_password = hashlib.sha256(msg).hexdigest()
print(hashed_password)

# 12345678 -> ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f