#!/usr/bin/env bash

pkg.link() {
	fs.link_files common

	case $(os.platform) in
		osx)
			fs.link_files platform/osx
			;;
		linux)
			fs.link_files platform/linux
			;;
	esac
}

pkg.install() {
	./scripts/packer.sh
	./scripts/nvidia.sh
	# ./scripts/powerline-fonts.sh
	./scripts/sensors.sh
}
