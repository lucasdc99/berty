// Code generated by berty.tech/core/.scripts/generate-logger.sh

package tracing

import "go.uber.org/zap"

func logger() *zap.Logger {
	return zap.L().Named("core.pkg.tracing")
}
