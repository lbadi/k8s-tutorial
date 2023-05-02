kubectl exec -it $1 -- psql postgresql://user:password@localhost/database < init.sql
