# aws-ecr-semver
If you are using AWS ECR to store your docker images and those images have labels in the [semver](http://semver.org/) format then you can use this tool to query AWS (assuming you are already authenticated) retrieve the list of valid semver labels and the one that satisfies a semver pattern.

## Usage

```
  Usage: index.js [options] [command]

    Commands:

    help  Display help

  Options:

    -h, --help     Output usage information
    -r, --repo     The name of the repository in the registry to query for labels.
    -s, --semver   The semver comparator to use to pick the correct label
    -v, --version  Output the version number
```

## Output

The command outputs to stdout json formated data for the semver valid labels and the maximum label satisfying the semver pattern provided.

## Example

```bash
npm start -- -r="my-repo" -s=^2.*
> aws-ecr-semver@1.0.0 start /var/devProjects/aws-ecr-semver
> node ./src/index.js "-r=bongo-db-server" "-s=^2.*"

{"maxSatisfyingLabel":"","validLabels":["1.2.3"]}
```

## Tests

Run them with the command:

`
npm test
`

## TODO
* Mock out the AWS components to enable more tests to be written.
  These interactions have been tested manually so far.

## Contributing
Please feel free to submit PRs, but if you do please try to add a test for your new feature.)