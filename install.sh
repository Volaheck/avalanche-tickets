# Clean up old executables
rm -rf /srv/avalanche-tickets/node_modules;
rm -rf /srv/avalanche-tickets/dist;
rm -rf /srv/avalanche-tickets/.git;
rm -rf /srv/avalanche-tickets/src;

# Replace with the new version
unzip -o avalanche-tickets.zip -d /srv/avalanche-tickets;
rm -f avalanche-tickets.zip;
cd /srv/avalanche-tickets;

# Build new version and launch
yarn install;
yarn build;

# Remove build script
rm -f install.sh;