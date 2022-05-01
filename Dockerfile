FROM denoland/deno:1.16.2

WORKDIR /app

USER deno

# These steps will be re-run upon each file change in your working directory:
ADD . .

CMD RUST_BACKTRACE=1 deno run --allow-net --allow-env --allow-read --unstable src/index.ts