#!/bin/ksh

mysql -vvv -h localhost -u root -pvagrant -t < ./data.sql 2>&1 | tee ./load.log 

msg_cnt=`/bin/grep -i 'Records: ' ./load.log | /bin/grep -i -v 'Deleted: 0  Skipped: 0  Warnings: 0' | /usr/bin/wc -l` 
cnt=`/bin/grep -i -e 'error ' -e 'warning ' ./load.log | /usr/bin/wc -l`
if [ $cnt -gt 0 ]
then
  echo "Error"
  exit 1
elif [ $msg_cnt -gt 0 ]
then
  echo "Error"
  exit 1
else
  echo "Completed successfully"
  exit 0
fi

