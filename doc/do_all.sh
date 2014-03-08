#!/bin/bash
for i in $(ls); do
		markdown $i > $i.html
done
